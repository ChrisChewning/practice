URLS



VIEWS
A view is a place where we put the "logic" of our application. It will request information from the model you created before and pass it to a template. We'll create a template in the next chapter. Views are just Python functions that are a little bit more complicated than the ones we wrote in the Introduction to Python chapter.


CREATE A VIEW

def post_list(request):  #function named post_list with request in it.
    return render(request, 'blog/post_list.html', {}) #returns a a function named render (put together) our template blog/post_list.html

    #what's the , {}) for though?



    
