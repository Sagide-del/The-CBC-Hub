export default {
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
      options: {
        list: [
          {title: 'Mathematics', value: 'mathematics'},
          {title: 'English', value: 'english'},
          {title: 'Science', value: 'science'},
          {title: 'Social Studies', value: 'social-studies'},
          {title: 'Kiswahili', value: 'kiswahili'}
        ]
      }
    },
    {
      name: 'grade',
      title: 'Grade',
      type: 'string',
      options: {
        list: [
          {title: 'Grade 1', value: 'grade1'},
          {title: 'Grade 2', value: 'grade2'},
          {title: 'Grade 3', value: 'grade3'},
          {title: 'Grade 4', value: 'grade4'},
          {title: 'Grade 5', value: 'grade5'},
          {title: 'Grade 6', value: 'grade6'}
        ]
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'isPremium',
      title: 'Premium Content',
      type: 'boolean',
      initialValue: false
    }
  ]
}
