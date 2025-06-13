'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils'; // Create or remove this if you don't use a utility

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-200">
        <SliderPrimitive.Range className="absolute h-full bg-black" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-white border-2 border-black shadow" />
    </SliderPrimitive.Root>
  )
);

Slider.displayName = 'Slider';
