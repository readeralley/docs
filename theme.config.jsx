export default {
  logo: <span>Readeralley</span>,
  docsRepositoryBase: 'https://github.com/readeralley/docs',
  useNextSeoProps() {
    return { titleTemplate: '%s' }
  },
  project: {
    link: 'https://github.com/readeralley/docs'
  },
  banner: {
    dismissible: true,
    text: "HEY HEY HEY",
    key: "banner"
  },
  sidebar: {
    toggleButton: false
  },
  feedback: {
    content: null
  },
  editLink: {
    text: null
  },
  navigation: false,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://readeralley.com" target="_blank">
          ReaderAlley
        </a>
        .
      </span>
    )
  },
  gitTimestamp: null
}