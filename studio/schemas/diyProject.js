export default {
  name: 'diyProject',
  title: 'DIY Project',
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
      name: 'materials',
      title: 'Materials Needed',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'steps',
      title: 'Instructions',
      type: 'array',
      of: [{type: 'text'}]
    },
    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          {title: 'Easy', value: 'easy'},
          {title: 'Medium', value: 'medium'},
          {title: 'Hard', value: 'hard'}
        ]
      }
    },
    {
      name: 'estimatedTime',
      title: 'Estimated Time',
      type: 'string'
    }
  ]
}
