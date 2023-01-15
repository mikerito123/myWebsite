import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'designedWith',
      title: 'Designed With',
      type: 'string',
    }),
    defineField({
      name: 'designedWithUrl',
      title: 'Designed With Url',
      type: 'url',
    }),
    defineField({
      name: 'photoBy',
      title: 'Photo By',
      type: 'string',
    }),
    defineField({
      name: 'photoByUrl',
      title: 'Photo By Url',
      type: 'url',
    }),
    defineField({
      name: 'availableAt',
      title: 'available at',
      type: 'string',
    }),
    defineField({
      name: 'availableAtUrl',
      title: 'available at url',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
