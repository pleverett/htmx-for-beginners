const createHomepageTemplate = () => /*html*/`
    <html>
        <head>
            <title>My Reading List></title>
            <script src="https://unpkg.com/htmx.org@2.0.1"></script>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <header>
                <h1>My Reading List</h1>
            </header>
            <main>
                <div class="book-list">
                    <button hx-get="/books">Show Books</button>
                </div>
                <div class="add-book-form">
                    <h2>What do you want to read?</h2>
                    <!-- form template here later -->
                </div>
            </main>
        </body>
    </html>
`

export default createHomepageTemplate