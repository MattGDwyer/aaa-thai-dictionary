AAA THAI DICTIONARY VERSION 1.0.0

WHAT THIS IS:
 I'm a student at a Thai language school. I've found it difficult to quickly find definitions, as there are many variations of romanized Thai. So I decided to try to fix that. This is the first version of that attempt using html, CSS, JS, jQuery, and Node.js. It is almost entirely from scratch apart from the bootstrap html template.

MY PROCESS:
 I wanted to use this as an oppotrunity to teach myself a few techs. My intention at first was to build a database to gather the entire Thai language and all of those variations of romanized Thai using data scraping. I decided first I would build a much smaller version using the vocabulary in the text books I had available for class levels 1-3. So I started by entering romanized Thai using https://ipa.typeit.org/full/, variations of each word without phonetic symbols, and their definitions.
 Once that was done I decided I would use some jQuery to add functionality to it. The next version will use React.

 NEXT VERSION:
The end goal of this is being able to type either what you think you heard with plain English characters (no phonetic symbols), or the definition in English. The search will return the romanized word, definition, and perhaps an audio example of the word being said.

I happened across a conversation with someone who suggested using the Google Translate API instead of building a massive database. Seeing as it was very time consuming to input all of the words myself, that seemed like a great idea, and an opportunity to work with API's.

When I researched Google Translate's API, I found they have a transliteration API as well. So my intention is to figure out how to use that as input into Google Translate, and output the definition, etc.

After that I decided to finish this version up to an MVP standard, teach myself to deploy it using heroku, and then move on to the next version.