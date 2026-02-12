import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {
  ArrowLeft,
  Calendar,
  CircleDollarSign,
  Clock,
  Contact,
  Hash,
  Map,
  MapPin,
  Music,
  Tag,
} from 'lucide-react';

import { db } from '@/firebase/config';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';

import EventTags from '@/components/socials/EventTags';
import EventTime from '@/components/socials/EventTime';
import GoogleMapLocation from '@/components/socials/GoogleMapLocation';
import MusicPercentages from '@/components/socials/MusicPercentages';
import CalendarLink from '@/components/socials/CalendarLink';
import DetailsLink from '@/components/socials/DetailsLink';
import FooterContent from '@/components/socials/FooterContent';
import { formatDateLine } from '@/components/utils';

import type { Social } from '@/types/eventTypes';

const EventPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Social | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) {
        setError('No event ID provided');
        setLoading(false);
        return;
      }

      try {
        const eventRef = doc(db, 'events', eventId);
        const eventSnap = await getDoc(eventRef);

        if (!eventSnap.exists()) {
          setError('Event not found');
          setLoading(false);
          return;
        }

        const eventData = eventSnap.data();
        const eventWithId: Social = {
          id: eventSnap.id,
          ...eventData,
          createdAt: eventData.createdAt?.toDate() || new Date(),
          startTime: eventData.startTime?.toDate() || new Date(),
          endTime: eventData.endTime?.toDate() || new Date(),
        } as Social;

        setEvent(eventWithId);
      } catch (err) {
        console.error('Error fetching event:', err);
        setError('Failed to load event');
        toast.error('Failed to load event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-8 max-w-4xl'>
        <div className='mb-6'>
          <Skeleton className='h-10 w-32' />
        </div>
        <Card>
          <CardHeader>
            <Skeleton className='h-12 w-3/4 mb-4' />
            <Skeleton className='h-6 w-1/2 mb-2' />
            <Skeleton className='h-6 w-1/3' />
          </CardHeader>
          <CardContent className='space-y-6'>
            <Skeleton className='h-64 w-full' />
            <Skeleton className='h-8 w-1/4' />
            <Skeleton className='h-6 w-3/4' />
            <Skeleton className='h-8 w-1/3' />
            <Skeleton className='h-32 w-full' />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className='container mx-auto px-4 py-8 max-w-4xl'>
        <Button
          variant='ghost'
          onClick={handleBack}
          className='mb-6 flex items-center gap-2'
        >
          <ArrowLeft className='h-4 w-4' />
          Back
        </Button>
        <Card>
          <CardContent className='py-12 text-center'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              {error || 'Event not found'}
            </h2>
            <p className='text-gray-600 mb-6'>
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={handleBack}>Go Back</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const musicPercentagesArray = event.musicPercentages
    ? (() => {
        const values = Object.values(event.musicPercentages).filter(
          (music) => music.percentage > 0,
        );

        const others = values.find(
          (music) => music.name.toLowerCase() === 'others',
        );

        const rest = values
          .filter((music) => music.name.toLowerCase() !== 'others')
          .sort((a, b) => b.percentage - a.percentage);

        return others ? [...rest, others] : rest;
      })()
    : [];

  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      {/* Back Button */}
      <Button
        variant='ghost'
        onClick={handleBack}
        className='mb-4 flex items-center gap-2'
      >
        <ArrowLeft className='h-4 w-4' />
        Back to Events
      </Button>

      {/* Event Header */}
      <Card className='mb-6'>
        <CardHeader className='text-center'>
          <CardTitle className='text-4xl font-bold mb-4'>
            {event.title}
          </CardTitle>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <div className='flex items-center gap-2'>
              <Calendar className='h-5 w-5' />
              <span className='font-medium'>
                {formatDateLine(event.startTime)}
              </span>
            </div>
            {event.location?.city && event.location?.state && (
              <div className='flex items-center gap-2'>
                <MapPin className='h-5 w-5' />
                <span className='font-medium'>
                  {event.location.city}, {event.location.state}
                </span>
              </div>
            )}
          </div>
        </CardHeader>
      </Card>

      {event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={event.title}
          className='w-full object-cover'
        />
      )}

      {/* Mobile Event Time - Shows only on mobile below image */}
      <div className='lg:hidden mt-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-lg flex items-center justify-center gap-1'>
              <Clock className='h-5 w-5' />
              Event Time
            </CardTitle>
          </CardHeader>
          <CardContent className='text-center'>
            <div className='space-y-2'>
              <div>
                <p className='text-sm text-muted-foreground'>
                  {formatDateLine(event.startTime)}
                </p>
              </div>
              <EventTime
                label=''
                startTime={event.startTime}
                endTime={event.endTime}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Event Content */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4'>
        {/* Main Content */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Event Description */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Tag className='h-5 w-5' />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='leading-relaxed whitespace-pre-line'>
                {event.description || 'No description available.'}
              </p>
            </CardContent>
          </Card>

          {/* Music Information */}
          {musicPercentagesArray.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Music className='h-5 w-5' />
                  Music Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MusicPercentages musicList={musicPercentagesArray} />
              </CardContent>
            </Card>
          )}

          {/* Location */}
          {event.location && (
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Map className='h-5 w-5' />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <GoogleMapLocation location={event.location} />
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Event Time - Hidden on mobile, shown on desktop */}
          <Card className='hidden lg:block'>
            <CardHeader>
              <CardTitle className='text-lg flex items-center justify-center gap-1'>
                <Clock className='h-5 w-5' />
                Event Time
              </CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <div className='space-y-2'>
                <div>
                  <p className='text-sm text-muted-foreground'>
                    {formatDateLine(event.startTime)}
                  </p>
                </div>
                <EventTime
                  label=''
                  startTime={event.startTime}
                  endTime={event.endTime}
                />
              </div>
            </CardContent>
          </Card>

          {/* Price */}
          <Card>
            <CardHeader>
              <CardTitle className='text-lg flex items-center justify-center gap-1'>
                <CircleDollarSign className='h-5 w-5' />
                Cover Charge
              </CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-2xl font-bold text-primary'>
                {event.price ? `$${event.price}` : 'Free'}
              </p>
            </CardContent>
          </Card>

          {/* Event Tags */}
          {event.eventTags && event.eventTags.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className='text-lg flex items-center justify-center gap-1'>
                  <Hash className='h-5 w-5' />
                  Event Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EventTags tags={event.eventTags} />
              </CardContent>
            </Card>
          )}

          {/* Links */}
          <Card>
            <CardHeader>
              <CardTitle className='text-lg'>Links</CardTitle>
            </CardHeader>
            <CardContent className='space-y-3 max-sm:flex flex-col'>
              <CalendarLink event={event} />
              {event.link && <DetailsLink link={event.link} />}
            </CardContent>
          </Card>

          {/* Footer Content */}
          <Card>
            <CardContent>
              <CardHeader>
                <CardTitle className='text-lg flex items-center justify-center gap-1'>
                  <Contact className='h-5 w-5' />
                  Contact
                </CardTitle>
              </CardHeader>
              <FooterContent
                createdAt={event.createdAt}
                socialLink={event.organizerSocialLink}
                websiteLink={event.websiteLink}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
