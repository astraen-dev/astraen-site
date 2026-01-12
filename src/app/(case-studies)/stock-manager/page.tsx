import { StockManagerHeader } from '@/components/case-studies/stock-manager/header';
import { StockManagerProblemSpace } from '@/components/case-studies/stock-manager/problem-space';
import { StockManagerArchitecture } from '@/components/case-studies/stock-manager/architecture';
import { StockManagerHighlights } from '@/components/case-studies/stock-manager/highlights';

export default function StockManagerCaseStudy() {
    return (
        <div className="w-full pt-32 pb-20">
            <StockManagerHeader />
            <StockManagerProblemSpace />
            <StockManagerArchitecture />
            <StockManagerHighlights />
        </div>
    );
}
