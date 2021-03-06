import {
  detailedPlan,
  id,
  includeState,
  isBuilt,
  name,
  tags,
  description,
  detailedState,
  detailedStateIds,
  detailedTensors,
  detailedProcedure,
  detailedOperations,
  detailedArgIds,
  detailedResultIds
} from '../dummy/plan';

describe('State', () => {
  test('can be properly constructed', () => {
    expect(detailedState.stateIds).toStrictEqual(detailedStateIds);
    expect(detailedState.tensors).toStrictEqual(detailedTensors);
  });
});

describe('Procedure', () => {
  test('can be properly constructed', () => {
    expect(detailedProcedure.operations).toStrictEqual(detailedOperations);
    expect(detailedProcedure.argIds).toStrictEqual(detailedArgIds);
    expect(detailedProcedure.resultIds).toStrictEqual(detailedResultIds);
  });
});

describe('Plan', () => {
  test('can be properly constructed', () => {
    expect(detailedPlan.id).toStrictEqual(id);
    expect(detailedPlan.procedure).toStrictEqual(detailedProcedure);
    expect(detailedPlan.state).toStrictEqual(detailedState);
    expect(detailedPlan.includeState).toStrictEqual(includeState);
    expect(detailedPlan.isBuilt).toStrictEqual(isBuilt);
    expect(detailedPlan.name).toStrictEqual(name);
    expect(detailedPlan.tags).toStrictEqual(tags);
    expect(detailedPlan.description).toStrictEqual(description);
  });
});
