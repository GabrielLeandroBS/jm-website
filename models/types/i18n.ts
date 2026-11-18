import type {
	Messages,
	NamespaceKeys,
	NestedKeyOf,
	useTranslations,
} from "next-intl";

export type Namespace = NamespaceKeys<Messages, NestedKeyOf<Messages>>;

export type Translations<N extends Namespace> = ReturnType<
	typeof useTranslations<N>
>;
