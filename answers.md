**1.) How long did you spend on the coding assignment?**
    
    I spent almost 4 hours in this coding assignment.

**a) What would you add to your solution if you had more time?**
    
    There are lot of things I can add to solution like
    pagination, as I am only displaying 1st 100 records right
    now but there are more records for given titles.
    Next, I can display full book details in a modal dialog
    on clicking of any row with a large sized cover image.

    There are lot of other things as well.

**b) If you didn't spend much time on the coding test,then use this as an opportunity to explain what you would add.**

    I can write multiple test cases for reducers
    and actions as well.

    I can use Typescript for strict type checking

    Right now, I have used material ui for just 
    displaying a loader, I can create that by myself
    
    Code can be much more optimized.

**2.) What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

    Latest version of React is 17 but I have used React 16
    here because Enzyme adapter is not compatible with
    react 17.

    In react 16, there are hooks, context etc. were 
    added. There are lot of hooks that enabled
    using state in functional component.

    There are certain hooks as well which made it
    easier to dispatch an action and get a variable from
    state using selector.

    ```
    const dispatch = useDispatch();
    const { books, loading } = useSelector(store => store.books)

    useEffect(() => {
        if (books) {
            setBookList([...books]);
        }
    }, [books])
    ```

**3.) How would you track down a performance issue in production? Have you ever had to do this?**

    Yes, in one of my project I faced issue of late
    API response. We were using MySql db in that.
    Then we have created Stored Procedures to get 
    data faster and that helped.

    In frontend as well, there were lot of re-rendering,
    then we have used `useMemo` and `useCallback`
    hooks to have conditional re-rendering. That
    also helped a lot.

**4.) How would you improve the API that you just used?**

    API which I have used is:
    http://openlibrary.org/search.json?q=the+great+gatsby

    We have to append the book title at the end. But look at the format
    it should be in small case, that is also fine. 
    But then, there should be + sign in between
    wherever space is there, that creates an overhead
    to convert text to lowercase first and then replace
    space with +.

    We should be able to pass title as user enter.

**5.) Please describe yourself using correctly formatted JSON.**
