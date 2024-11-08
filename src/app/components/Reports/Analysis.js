'use client'; 
import dynamic from 'next/dynamic';
const DynamicChartOne = dynamic(() => import('./Charts').then((mod) => mod.ChartOne), { ssr: false });
const DynamicChartTwo = dynamic(() => import('./Charts').then((mod) => mod.ChartTwo), { ssr: false });
const DynamicChartThree = dynamic(() => import('./Charts').then((mod) => mod.ChartThree), { ssr: false });
const DynamicChartFour = dynamic(() => import('./Charts').then((mod) => mod.ChartFour), { ssr: false });

export function Chart1() {
  return <DynamicChartOne />;
}

export function Chart2() {
  return <DynamicChartTwo />;
}

export function Chart3(){
    return <DynamicChartThree/>;
}

export function Chart4(){
    return <DynamicChartFour/>;
}
