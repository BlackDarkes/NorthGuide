import { Container, Skeleton } from "@/shared/ui";

export const ProfileSkeleton = () => {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="flex items-center gap-4">
            <Skeleton className="size-14 rounded-full shrink-0" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-40" />
              <Skeleton className="h-4 w-52" />
            </div>
          </div>

          <Skeleton className="h-100 w-full rounded-xl" />
        </div>
      </Container>
    </section>
  );
};