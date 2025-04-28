import { FeatureItemInterface } from "@/interface";
import React from 'react';

export default function FeatureComponent({ feature }: { feature: FeatureItemInterface }) {
  const { icon: Icon, title, subtitle } = feature;

  return (
    <div className="flex flex-col mb-6 lg:last:mb-0">
      <div className="flex items-center justify-center lg:justify-start">
        {Icon && <Icon className="text-2xl lg:text-3xl mr-3" />}
        <h4 className="text-base lg:text-xl font-semibold">{title}</h4>
      </div>
      <p className="mt-3">{subtitle}</p>
    </div>
  )
}