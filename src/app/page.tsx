import { Hero } from '@/components/home/hero';
import { Competencies } from '@/components/home/competencies';
import { RainVuShowcase } from '@/components/home/rainvu-showcase';
import { StockManagerShowcase } from '@/components/home/stock-manager-showcase';
import { Philosophy } from '@/components/home/philosophy';

export default function Home() {
    return (
        <div className="flex w-full flex-col items-center">
            <Hero />
            <Competencies />
            <RainVuShowcase />
            <StockManagerShowcase />
            <Philosophy />
        </div>
    );
}
