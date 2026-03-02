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
      type: 'text',
      rows: 3
    },
    {
      name: 'materials',
      title: 'Materials Needed',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'steps',
      title: 'Instructions',
      type: 'array',
      of: [{type: 'text'}],
      validation: Rule => Rule.required()
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
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'estimatedTime',
      title: 'Estimated Time',
      type: 'string',
      description: 'e.g., "30 minutes", "1 hour"',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'difficulty',
      media: 'image'
    }
  }
}
