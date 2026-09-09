'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { appointmentUrl } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: 'Essência', label: 'RESPEITO AOS SEUS TRAÇOS' },
  { value: 'Cuidado', label: 'UM OLHAR INDIVIDUAL' },
  { value: 'Você', label: 'EM PRIMEIRO LUGAR' },
];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Isabella Sampaio, beleza com essência">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">ISABELLA SAMPAIO</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">BELEZA COM ESSÊNCIA</textPath>
      </text>
      <text fill="currentColor" x="90" y="104" textAnchor="middle" style={{fontFamily:"var(--serif)",fontSize:48,letterSpacing:-3}}>is.</text>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">BIOMEDICINA ESTÉTICA</p>
        <h1 id="campaign-title" aria-label="A sua melhor versão começa por aqui">
          <span className="campaign-title-line"><span>SUA MELHOR</span></span>
          <span className="campaign-title-line"><span>VERSÃO</span></span>
          <span className="campaign-title-line"><span>COMEÇA AQUI.</span></span>
        </h1>
        <p className="campaign-subtitle">Beleza, cuidado e confiança<br/>em perfeita harmonia.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src="/images/isabella-hero.webp" alt="Dra. Isabella Sampaio" fill preload sizes="(max-width:700px) 145vw, (max-width:1100px) 77vw, 60vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Beleza<br/>também<br/>é saúde<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Pilares do cuidado">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. ISABELLA SAMPAIO</p><em>Biomedicina Estética<br className="campaign-signature-break"/> para uma vida mais confiante.</em></div></div>
    </div>
  </section>;
}
