import React from 'react';
import Button from './Button';

export default {
    title:'atoms/Button',
    component: Button
}

export const Primary = () => <Button buttonText='Primary' varient='primary' />
export const Secondary = () => <Button buttonText='Secondary' varient='secondary' />
export const Success = () => <Button buttonText='Success' varient='success' />
export const Danger = () => <Button buttonText='Danger' varient='danger' />