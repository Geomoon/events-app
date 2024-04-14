import { MainCard } from "./events/components/main-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-32 p-24">
      <MainCard title="ALL EVENTS" href="events" />
      <MainCard title="NEW EVENT" href="events/new" />
    </main>
  );
}
