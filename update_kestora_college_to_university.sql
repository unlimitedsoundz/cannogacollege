-- SQL script to replace "Penkka College" with "Penkka University" in the database
-- Run this in your Supabase SQL editor or PostgreSQL client

-- Update Course table description field
UPDATE "Course"
SET "description" = REPLACE("description", 'Penkka College', 'Penkka University')
WHERE "description" LIKE '%Penkka College%';

-- Update Course table title field
UPDATE "Course"
SET "title" = REPLACE("title", 'Penkka College', 'Penkka University')
WHERE "title" LIKE '%Penkka College%';

-- Update any other text fields in Course table if they contain the text
-- For example, if there's a summary or other fields:
-- UPDATE "Course"
-- SET "summary" = REPLACE("summary", 'Penkka College', 'Penkka University')
-- WHERE "summary" LIKE '%Penkka College%';

-- If there are other tables with course-related content, update them similarly
-- For example, if there's a Blog table or PageContent table:
-- UPDATE "Blog"
-- SET "content" = REPLACE("content", 'Penkka College', 'Penkka University')
-- WHERE "content" LIKE '%Penkka College%';

-- UPDATE "Blog"
-- SET "excerpt" = REPLACE("excerpt", 'Penkka College', 'Penkka University')
-- WHERE "excerpt" LIKE '%Penkka College%';

-- Update sections content in Course table (assuming sections is jsonb array with content field)
UPDATE "Course"
SET "sections" = (
  SELECT jsonb_agg(
    CASE
      WHEN elem ? 'content'
      THEN jsonb_set(elem, '{content}', to_jsonb(REPLACE(elem->>'content', 'Penkka College', 'Penkka University')))
      ELSE elem
    END
  )
  FROM jsonb_array_elements("sections") AS elem
)
WHERE EXISTS (
  SELECT 1 FROM jsonb_array_elements("sections") AS elem
  WHERE elem->>'content' LIKE '%Penkka College%'
);

-- Check for any other tables that might contain this text and update accordingly