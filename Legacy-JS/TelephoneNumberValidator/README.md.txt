## 💻 Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Code Explanation:
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

- ^: Indicates the beginning of the string.
- (1\s?)?: This part corresponds to an optional group that can begin with the character "1" followed by zero or a blank space (represented by \s?). O ? after the group indicates that the entire group is optional, that is, the phone number may or may not begin with "1" followed optionally by a blank space.
- (\(\d{3}\)|\d{3}): This group corresponds to a three-digit area code. It may or may not be preceded by parentheses.
- \(\d{3}\): This corresponds to an area code in parentheses.
- |: Represents an alternation, that is, the regular expression can match any of the alternatives before or after the | character.
- \d{3}: This matches an area code without parentheses.
- [\s-]?: This matches a blank space or an optional hyphen between the area code and the phone number prefix.
- \d{3}: Corresponds to the prefix of the telephone number, consisting of three digits.
- [\s-]?: Plus an optional blank or hyphen between the prefix and the last part of the phone number.
- \d{4}: Matches the last four digits of the phone number.
- $: Indicates the end of the string.