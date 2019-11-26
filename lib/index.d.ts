import { ReactNode } from 'react';
import { FlagButton } from './FlagButton';
import { TranslationLanguageCode, CountryCode, Country, Region, Subregion } from './types';
import { Theme } from './CountryTheme';
import { CountryFilter, CountryFilterProps } from './CountryFilter';
import { ModalProps, FlatListProps } from 'react-native';
interface Props {
    countryCode: CountryCode;
    region?: Region;
    subregion?: Subregion;
    countryCodes?: CountryCode[];
    excludeCountries?: CountryCode[];
    theme?: Theme;
    translation?: TranslationLanguageCode;
    modalProps?: ModalProps;
    filterProps?: CountryFilterProps;
    flatListProps?: FlatListProps<Country>;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    withEmoji?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withCloseButton?: boolean;
    withFilter?: boolean;
    withFlag?: boolean;
    withModal?: boolean;
    visible?: boolean;
    renderFlagButton?(props: FlagButton['props']): ReactNode;
    renderCountryFilter?(props: CountryFilter['props']): ReactNode;
    onSelect(country: Country): void;
    onOpen?(): void;
    onClose?(): void;
}
declare const Main: {
    ({ theme, translation, ...props }: Props): JSX.Element;
    defaultProps: {
        onSelect: () => void;
        withEmoji: boolean;
    };
};
export default Main;
export { getCountriesAsync as getAllCountries, getCountryCallingCodeAsync as getCallingCode, } from './CountryService';
export { CountryModal } from './CountryModal';
export { DARK_THEME, DEFAULT_THEME } from './CountryTheme';
export { CountryFilter } from './CountryFilter';
export { CountryList } from './CountryList';
export { FlagButton } from './FlagButton';
export { HeaderModal } from './HeaderModal';
export * from './types';