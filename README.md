# AngularTraining

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Component

Generate a component named `simple-component-example` and display it on application.
Then edit **his template HTML** to display :
1. This message 'this is a simple component' inside a `p` tag.

## Interpolation {{...}}

Generate a component named `interpolation-example` and display it on application.
Then edit **his template HTML** to display :
1. The result of `250 * 2` using template expression and interpolation.
2. The string `'StringInCamelCase'` in **lower case** using template expression and interpolation.

## Component with attributs
Generate a component named `component-attributs-example` and display it on application.

### First exercise (with simple value) :
1. Add the following property `name` of type `string`.
2. Set value of `name` property to `'John Doe'`. 
3. Edit **his template HTML** to display the value `name` property (using template expression and interpolation).
5. Edit **his template HTML** to display the value `name` property in **upper case** (using template expression and interpolation).

### Second exercise (with Object value) :
1. Add the following property `address` of type `any`.
2. Set value of `address` property to :
   ````typescript
   {
     city: 'Tours',
     street: 'boulevard preuilly',
     number: '49',
     zipCode: '37000'
   }
   ```` 
3. Edit **his template HTML** and each properties of `address` property must be displayed inside his own `p` tag (using template expression and interpolation).
4. Edit **his template HTML** and display only `city` and `street` in **upper case** (using template expression and interpolation).

### Third exercise (with Array value) :
1. Add the following property `skills` of type `any[]`.
2. Set value of `skills` property to :
   ````typescript
   [
    {
      name: 'Angular',
      version: '7.0.0'
    },
    {
      name: 'TypeScript',
      version: '3'
    },
    {
      name: 'Node.js',
      version: '10'
    }
   ]
   ```` 
3. Edit **his template HTML** and only displays the name and version of the first skill (using template expression and interpolation).

## Property binding [...]
Generate a component named `property-bindings-example` and display it on application.

### First exercise (with simple value) :
1. Add the following property `url` of type `string`.
2. Set value of `url` property to `'https://www.google.fr'`.
3. Edit **his template HTML** and add `a` tag (with title "go to google")
4. Edit **his template HTML** and bind the `url` property to the `href` attribut of `a` tag (using property binding with square brackets, no interolation).

### Second exercise (with Object value) :
1. Add the following property `popCornImg` of type `any`.
2. Set value of `popCornImg` property to :
   ````typescript
   {
     url: 'https://cdn.pixabay.com/photo/2013/07/13/01/21/popcorn-155602_960_720.png',
     width: '100',
     height: '150'
   }
   ```` 
3. Edit **his template HTML** and add `img` tag
4. Edit **his template HTML** and bind `popCornImg` property `url` to `src`,  `width` to `width` attribut and `height` to `height` attribut of `img`.

## Event binding (...)
Generate a component named `event-bindings-example` and display it on application.

### First exercise (with simple méthod) :
1. Add new method named `onTriggerSimpleMethod`
2. When this method is triggered you must log in the console the following message : `"Method onTriggerSimpleMethod was triggered by click event"` 
3. Edit **his template HTML** and add `button` tag (with title "Trigger simple method")
4. Bind the method `onTriggerSimpleMethod` to the `click` event of the button.
5. Check if the message is correctly displayed in the web console.

### Second exercise (with hardcoded value as method arguments) :
1. Add new method named `onTriggerMethodWithHardcodedArg` which has one argument of type `string`
2. When this method is triggered you must log in the console the following message : `"Method onTriggerMethodWithHardcodedArg was triggered by click event, with argument : (display argument value)"` 
3. Edit **his template HTML** and add `button` tag (with title "Trigger method with hardcoded arguments")
4. Bind the method `onTriggerMethodWithHardcodedArg` with hardcoded string `"bad hardcoded string"` as argument, to the `click` event of the button.
5. Check if the message is correctly displayed in the web console.

### Third exercise (with variable as method arguments) :

1. Add a new property named `title` of type `string`
3. Set value of `title` property `"This title will be passed as parameters of onTriggerMethodWithArg"`
4. Add a new method named `onTriggerMethodWithArg` which has one argument of type `string`
5. When this method is triggered you must log in the console the following message : `"Method onTriggerMethodWithArg was triggered by click event, with argument : (display argument value)"` 
6. Edit **his template HTML** and add `button` tag (with title "Trigger method with arguments")
7. Bind the method `onTriggerMethodWithArg` with property `title` as argument, to the `click` event of the button.
8. Check if the message is correctly displayed in the web console.

## Built in directive
Generate a component named `builtin-directive-example` and display it on application.

<!-- ### Structural directive
1. Add a new property named `cities` of type `any[]`
2. Set value of `cities` property to :
   ````typescript
   [
    {
      city: 'Tours',
      zipCode: '37000'
    },
    {
      city: 'Saint Cyr/Loire',
      zipCode: '37540'
    },
    {
      city: 'SaintAvertin',
      version: '37550'
    }
   ]
   ```` 
### Attribut directive -->

<!-- 
## Built in Pipe {{ ... | ... }}
Generate a component named `buildin-pipe-example` and display it on application. -->

<!-- ### Third exercise (with Array value) :
1. Add the following property `tastes` of type `string[]`.
2. Set value of `tastes` property to :
   ````typescript
   [
     "salty",
     "sweet",
     "strawberry"
   ] -->
