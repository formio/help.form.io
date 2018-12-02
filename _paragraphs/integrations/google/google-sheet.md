---
title: Google Sheets
book: developer
section: integrations
chapter: googledrive
slug: google-sheet
weight: 20
---

In order to set up integration between a form and a Google Sheet, you will need to add an action to the form. Either create a new form or select an existing form and add a Google Sheet action to it.

![](/assets/img/googlesheet/googlesheet-actionform.png){: .img-fluid .img-thumbnail }

On the Actions tab, select "Google Sheets" from the list of the Action.

![](/assets/img/googlesheet/googlesheet-selectaction.png){: .img-fluid .img-thumbnail }

Get the Spreadsheet ID and Sheet Name from the Google Sheet. You can find the Sheet ID in Sheet URL.

![](/assets/img/googlesheet/googlesheet-spreadsheet.png){: .img-fluid .img-thumbnail }

Provide Sheet ID and Sheet Name. Next you will need to map the fields on your form to columns in the Sheet. You can find Spreasheet keys at the top of Spreadsheet columns. For each field, specify the column key e.g. 'A' in 'Column [First Name]. It will add First Name data in column 'A'.

![](/assets/img/googlesheet/googlesheet-actionmapping.png){: .img-fluid .img-thumbnail }

Now it's time to test our settings. Go to the view tab of your form and try to submit it with relevent data in the fields.

![](/assets/img/googlesheet/googlesheet-form.png){: .img-fluid .img-thumbnail }

![](/assets/img/googlesheet/googlesheet-formsubmit.png){: .img-fluid .img-thumbnail }

You should see the field titles are automatically created in the Google Spredsheet and the correct form data is added to the columns configured in the action form fields. Any additional form submissions will add data to the subsequent rows.

![](/assets/img/googlesheet/googlesheet-spreadsheetdata.png){: .img-fluid .img-thumbnail }
