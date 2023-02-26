export interface UseCurrencyFormatOptions {
  /**
   * The currency to use in currency formatting.
   * Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar,
   * "EUR" for the euro, or "CNY" for the Chinese RMB — see the Current currency & funds code list.
   *
   * @see https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=currency-codes
   * @default 'idr'
   */
  currency?: string;
  /**
   * Whether the fraction digits should be returned
   * (e.g., 123456.789 becomes 123.456,79 if the value is true,
   * becomes 123.457 if the value is false)
   *
   * @default true
   */
  withFractionDigits?: boolean;
}

/**
 * Get the formatted currency according to the number passed in.
 *
 * @param number
 * @param options
 */
export const useCurrencyFormat = (
  number: number,
  options: UseCurrencyFormatOptions = {},
) => {
  const { currency = 'IDR', withFractionDigits = true } = options;
  const toCurrency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency,
    ...(withFractionDigits
      ? {}
      : { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
  }).format(number);
  return toCurrency;
};
