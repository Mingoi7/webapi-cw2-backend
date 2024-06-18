export const pet = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/pet",
  "title": "pet",
  "description": "An pet in the website",
  "type": "object",
  "properties": {
    "title": {
      "description": "Main title of the website pet",
      "type": "string"
    },
    "alltext": {
      "description": "Body text of the website pet",
      "type": "string"
    },
    "summary": {
      "description": "Optional short text summary of pet",
      "type": "string"
    },
    "imageURL": {
      "description": "URL for main image to show in pet",
      "type": "uri"
    },
    "published": {
      "description": "Is the pet published or not",
      "type": "boolean"
    },
    "authorid": {
      "description": "User ID of the pet author",
      "type": "integer",
      "minimum": 0
    },
    "description": {
      "description": "description of pets in more details",
      "type": "string"  
    }        
  },
  "required": ["title", "alltext", "authorid"]
}