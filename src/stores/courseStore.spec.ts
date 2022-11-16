import { beforeEach, describe, it, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCourseStore } from "./CourseStore";

describe("course tests", () => {
  beforeEach(() => {
    return setActivePinia(createPinia());
  });

  it("Is my test working", async () => {
    const course = useCourseStore();
    expect(course.id).toBe(0);
    expect(course.courses).toHaveLength(0);
  });

  it("Import course collection", async () => {
    const course = useCourseStore();
    expect(course.courseList).toHaveLength(0);
    course.importCourse();
    expect(course.courseList).toHaveLength(1);
    expect(course.courseList[0].uuid.length).toBeGreaterThan(0);
    expect(course.courseList[0].title.length).toBeGreaterThan(0);
    expect(course.courseList[0].details.length).toBeGreaterThan(0);
    expect(course.courseList[0]).toHaveProperty("image");
    expect(course.courseList[0]).toHaveProperty("created_Date");
    expect(course.courseList[0]).toHaveProperty("updated_Date");
    expect(course.courseList[0]).toHaveProperty("version");
    expect(course.courseList[0]).toHaveProperty("iteration");
    expect(course.courseList[0]).toHaveProperty("previous");
    expect(course.courseList[0]).toHaveProperty("state");
  });

  it("Import course once, no dupes", async () => {
    const course = useCourseStore();
    expect(course.courseList).toHaveLength(0);
    course.importCourse();
    course.importCourse();
    expect(course.courseList).toHaveLength(1);
  });

  it("Is my test working", async () => {
    const course = useCourseStore();
    expect(course.id).toBe(0);
    expect(course.courses).toHaveLength(0);
  });
});
