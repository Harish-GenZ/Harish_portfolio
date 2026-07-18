Improve the CSS of the top navigation bar in the portfolio (the one with
the "~/ Harish.dev" logo, file tabs, resume link, and search icon). Do NOT
change structure, content, or functionality — only spacing, alignment, and
polish.

1. Container spacing
   - Add proper horizontal padding to the entire nav bar container
     (min 24-32px on desktop, not flush to the viewport edge)
   - The "~/ Harish.dev" logo should never sit closer than ~24px from
     the left edge

2. Logo block
   - Add a small gap between the "~/" prefix icon and "Harish.dev" text
     (currently reads too tight)
   - Give the logo block a bit of right margin before the tabs start,
     so it doesn't feel like it's colliding with "home.md"

3. Tab spacing
   - Increase horizontal gap between tabs (home.md / about.md /
     skills.json / etc.) — currently too tight, should have consistent
     comfortable spacing (e.g. 24-28px between tab labels)
   - Active tab underline should match the tab's text width, not look
     disconnected

4. Right side (resume + search)
   - Add spacing between "$ resume" and the search icon button
   - Give the search icon button proper padding so it doesn't look
     cramped against the edge of the nav bar (same right-edge margin
     as the left-edge logo margin, for symmetry)

5. Vertical rhythm
   - Ensure logo, tabs, and right-side items are all vertically
     centered against each other
   - Add a touch more vertical padding to the whole bar so it doesn't
     feel squeezed top-to-bottom

6. General
   - Use consistent spacing scale (e.g. Tailwind's spacing scale —
     4/6/8px increments) rather than arbitrary one-off values
   - Left edge margin, right edge margin, and tab-to-tab gaps should
     all feel like they belong to the same spacing system