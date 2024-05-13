import React, { ButtonHTMLAttributes } from 'react';

import { $Root } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => {
	return <$Root {...props}>{children}</$Root>;
};

export default Button;
