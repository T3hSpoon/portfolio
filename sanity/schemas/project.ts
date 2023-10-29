import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",      
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",     
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",      
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",     
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",   
      of: [{ type: "reference", to: {type: "skill"}}],  
    },    
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",       
    },
    
  ],

})
