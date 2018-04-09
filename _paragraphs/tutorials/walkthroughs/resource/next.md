---
title: Next Steps
book: tutorials
section: walkthroughs
chapter: resource
slug: next
weight: 50
---
If you are feeling ambitious, there are a couple of immediate improvements that go beyond the scope of this walk-through.
The first would be to loop over all language results, thus removing the need to localize the submissionId's.
If you are interested in the <a href="tutorials/walkthroughs/phraseapp/">PhraseApp integration</a>, we do just that.
Secondly, create a local cache of the translations. Not only would this localize the data after form construction, but
would have the added benefit of dramatically reducing the number of API calls to the Form.io server. Next, you could reduce
the fetch function that's included in all three button events down to a single function call. Finally, add browser language detection
and set the default language on form construction.

