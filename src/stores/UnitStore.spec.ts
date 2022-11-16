import { beforeEach, describe, it, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUnitStore } from "./UnitStore";

describe("unit tests", () => {
  beforeEach(() => {
    return setActivePinia(createPinia());
  });

  it("Is my test working", async () => {
    const unit = useUnitStore();
    expect(unit.id).toBe(0);
    expect(unit.units).toHaveLength(0);
  });
});
