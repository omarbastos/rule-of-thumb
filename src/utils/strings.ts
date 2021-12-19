interface ReplaceInterface {
  value: string
  oldValue: string
  newValue: string
}

interface STGInterface<T> {
  replace: {
    [K: string]: T
  }
}

type StringsType = typeof strings

const strings = {
  speak_out: 'Speak out. Be heard.',
  be_counted: 'Be counted',
  banner_top_description: `Rule of Thumb is a crowd sourced court of public opinion where anyone
  and everyone can speak out and speak freely. It’s easy: You share your
  opinion, we analyze and put the data in a public report.`,
  banner_bottom_title: ' Is there anyone else you would want us to add?',
  submit_a_name: 'Submit a name',
  terms_and_conditions: 'Terms and Conditions',
  privacy_policy: 'Privacy Policy',
  contact_us: 'Contact Us',
  follow_us: 'Follow Us',
  rule_of_thumb: 'Rule of thumb.',
  past_trials: 'Past Trials',
  how_it_works: 'How It Works',
  login_signup: 'Login / Sign Up',
  vote_now: 'Vote Now',
  thank_you: 'Thank you for your vote!',
  vote_again: 'Vote Again',
  previous_rulings: 'Previous Rulings',
  what_is_your_opinion: "What's your opinion on",
  pope_francis: 'Pope Francis',
  hero_description: `He’s talking tough on clergy sexual abuse, or is he just another
  pervert protector? (thumbs down) or a true pedophile punishing
  pontiff? (thumbs up)`,
  more_information: 'More information',
  what_is_your_veredict: 'What’s Your Veredict?',
  closing_in: 'closing in',
  days: 'days'
}

const replaceValue = ({
  value,
  oldValue,
  newValue
}: ReplaceInterface): string => {
  if (value.replaceAll) return value.replaceAll(oldValue, newValue)
  return value
}

const applyOptions = <T extends string, K>(
  value: T,
  options: STGInterface<K>
): string => {
  const { replace } = options
  let vTemp: string = value
  if (replace) {
    Object.keys(replace).forEach((key) => {
      vTemp = replaceValue({
        value: vTemp,
        oldValue: key,
        newValue: `${replace[key]}`
      })
    })
  }
  return vTemp
}

const stg = <T extends keyof StringsType, K>(
  key: T,
  options?: STGInterface<K>
): string => {
  if (options) {
    return applyOptions(strings[key], options)
  }
  return strings[key]
}

export default stg
