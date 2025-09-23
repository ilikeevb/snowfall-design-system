'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { SnowfallIcon as SnowfallIconElement, defineCustomElement as defineSnowfallIcon } from "stencil-library/dist/components/snowfall-icon.js";
export const SnowfallIcon = createComponent({
    tagName: 'snowfall-icon',
    elementClass: SnowfallIconElement,
    react: React,
    events: {},
    defineCustomElement: defineSnowfallIcon
});
//# sourceMappingURL=components.js.map