'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { SnowfallButton as SnowfallButtonElement, defineCustomElement as defineSnowfallButton } from "stencil-library/dist/components/snowfall-button.js";
import { SnowfallIcon as SnowfallIconElement, defineCustomElement as defineSnowfallIcon } from "stencil-library/dist/components/snowfall-icon.js";
export const SnowfallButton = createComponent({
    tagName: 'snowfall-button',
    elementClass: SnowfallButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineSnowfallButton
});
export const SnowfallIcon = createComponent({
    tagName: 'snowfall-icon',
    elementClass: SnowfallIconElement,
    react: React,
    events: {},
    defineCustomElement: defineSnowfallIcon
});
//# sourceMappingURL=components.js.map