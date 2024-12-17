---
title: TavilySearchResults Tool
description: Tavily Search is a platform that offers advanced search capabilities, designed to efficiently retrieve up-to-date information.
---

# TavilySearchResults Tool

## Description

[Tavily](https://app.tavily.com/) is a platform that offers advanced search capabilities, designed to efficiently retrieve up-to-date information.

Enhance your agents with:
- **Custom Search**: Quickly and accurately retrieve relevant search results.
- **Simple Integration**: Easily configure your search tool with adjustable parameters.

:::tip[Try it Out in the Playground!]
Before diving into the installation and coding, why not experiment directly with our interactive playground? [Try it now!](https://www.kaibanjs.com/share/9lyzu1VjBFPOl6FRgNWu)
:::

## Installation

Before using the tool, make sure to create an API Key at [Tavily](https://app.tavily.com/) to enable search functionality.

## Example

Utilize the TavilySearchResults tool as follows to enable your agent to search for up-to-date information:

```js
import { TavilySearchResults } from '@langchain/community/tools/tavily_search';

const searchTool = new TavilySearchResults({
    maxResults: 1,
    apiKey: 'ENV_TRAVILY_API_KEY',
});

const newsAggregator = new Agent({
    name: 'Mary', 
    role: 'News Aggregator', 
    goal: 'Aggregate and deliver the most relevant news and updates based on specific queries.', 
    background: 'Media Analyst',
    tools: [searchTool]
});
```

## Parameters

- `maxResults` **Required**. The maximum number of results you want to retrieve.
- `apiKey` **Required**. The API key generated from [Tavily](https://app.tavily.com/). Set `'ENV_TRAVILY_API_KEY'` as an environment variable or replace it directly with your API key.

:::tip[We Love Feedback!]
Is there something unclear or quirky in the docs? Maybe you have a suggestion or spotted an issue? Help us refine and enhance our documentation by [submitting an issue on GitHub](https://github.com/kaiban-ai/KaibanJS/issues). We’re all ears!
:::