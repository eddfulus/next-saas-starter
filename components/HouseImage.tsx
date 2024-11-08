import Image from 'next/image';

interface HouseImageProps {
  src: string;
  alt: string;
}

export default function HouseImage({ src, alt }: HouseImageProps) {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}