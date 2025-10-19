'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { SnowfallButton as SnowfallButtonElement, defineCustomElement as defineSnowfallButton } from "stencil-library/dist/components/snowfall-button.js";
export const SnowfallButton = createComponent({
    tagName: 'snowfall-button',
    elementClass: SnowfallButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineSnowfallButton
});
//# sourceMappingURL=components.js.map