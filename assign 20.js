let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    
    buildSentence: function() {
      // Use ternary operators to check if properties are present
      return (this.subject && this.verb && this.object) 
        ? this.subject + " " + this.verb + " " + this.object 
        : "Incomplete sentence";
    },
    
    updateProperty: function(property, value) {
      // Check if the property exists and update it, or return "Invalid property"
      if (this.hasOwnProperty(property)) {
        this[property] = value;
      } else {
        return "Invalid property";
      }
    }
  };
  