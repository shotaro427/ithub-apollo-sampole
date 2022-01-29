import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type GetContriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, native: string, phone: string, capital?: string | null | undefined, currency?: string | null | undefined, emoji: string, emojiU: string, continent: { __typename?: 'Continent', code: string, name: string }, languages: Array<{ __typename?: 'Language', code: string, name?: string | null | undefined, native?: string | null | undefined, rtl: boolean }>, states: Array<{ __typename?: 'State', code?: string | null | undefined, name: string }> }> };


export const GetContriesDocument = gql`
    query getContries {
  countries {
    code
    name
    native
    phone
    continent {
      code
      name
    }
    capital
    currency
    languages {
      code
      name
      native
      rtl
    }
    emoji
    emojiU
    states {
      code
      name
    }
  }
}
    `;

/**
 * __useGetContriesQuery__
 *
 * To run a query within a React component, call `useGetContriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContriesQuery(baseOptions?: Apollo.QueryHookOptions<GetContriesQuery, GetContriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContriesQuery, GetContriesQueryVariables>(GetContriesDocument, options);
      }
export function useGetContriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContriesQuery, GetContriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContriesQuery, GetContriesQueryVariables>(GetContriesDocument, options);
        }
export type GetContriesQueryHookResult = ReturnType<typeof useGetContriesQuery>;
export type GetContriesLazyQueryHookResult = ReturnType<typeof useGetContriesLazyQuery>;
export type GetContriesQueryResult = Apollo.QueryResult<GetContriesQuery, GetContriesQueryVariables>;