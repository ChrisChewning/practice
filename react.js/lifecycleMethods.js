Essentially, lifecycle methods are special methods provided by JavaScript frameworks that allow users to “hook” into the views when specific conditions happen (i.e. when the view first renders, when the view gets updated with new data, etc).


componentDidMount is the analog to componentWillMount in that it happens right AFTER the component has mounted and rendered initially. At this point, the component is available in the DOM and this is the ideal spot to perform any further DOM manipulation. It’s also the perfect place to perform any set up logic that involves AJAX calls.


https://medium.com/@fay_jai/dissecting-reactjs-lifecycle-methods-be4fdea11c6d
