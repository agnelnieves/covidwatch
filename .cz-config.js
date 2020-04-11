module.exports = {
    types: [
        { value: 'feat',     name: 'feat:      A new feature' },
        { value: 'edit',     name: 'edit:      Any change to the code aside from new feature or code formatting' },
        { value: 'fix',      name: 'fix:       A bug fix' },
        { value: 'docs',     name: 'docs:      Changes to documentation' },
        { value: 'perf',     name: 'perf:      A code change that improves performance' },
        { value: 'refactor', name: 'refactor:  Refactor: refactoring production code, functions, loops, etc' },
        { value: 'test',     name: 'test:      Adding missing tests or correcting existing tests' },
        { value: 'chore',    name: 'Chore:     Updating build tasks, package manager configs, etc; no production code change' },
        { value: 'revert',   name: 'revert:    Revert to a commit' },
    ],

    scopes: [{ name: 'site' }, {name: 'component'}, ],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    // ticketNumberPrefix: 'ISSUE-',
    // ticketNumberRegExp: '\\d{1,5}',
    upperCaseSubject: true,

    messages: {
        type: "Select the type of change that you're committing:",
        scope: '\nDenote the SCOPE of this change (optional but preferred):',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        confirmCommit: 'Are you sure you want to proceed with the commit above? (y/n)',
    },

    allowCustomScopes: false,

    // skip any questions you want
    skipQuestions: ['footer'],

    // limit subject length
    subjectLimit: 100,
    breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
};
