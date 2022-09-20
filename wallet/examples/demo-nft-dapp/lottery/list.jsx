import { useMemo } from 'react';
import { useSuiObjects } from '../shared/objects-store-context';
import { TYPE_LOTTERY } from './constants';
import { LotteryListItem } from './list-item';

export function LotteryList() {
    const { suiObjects } = useSuiObjects();
    const lotteries = useMemo(() => {
        return Object.entries(suiObjects)
            .filter(([_, obj]) => obj.data.type === TYPE_LOTTERY)
            .map(([_, obj]) => obj);
    }, [suiObjects]);
    return (
        <dl>
            {lotteries.map(({ reference: { objectId: id } }) => (
                <LotteryListItem key={id} id={id} />
            ))}
        </dl>
    );
}
