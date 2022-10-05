import clsx from 'clsx';

export function ContentWrapper({ as: Component = 'div', className, ...props }) {
	return (
		<Component
			className={clsx(className, 'mx-auto w-full max-w-xl')}
			{...props}
		/>
	);
}
