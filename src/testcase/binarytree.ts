const testCase:any[] = [
  [{
    data: 1,
    right: {
      data: 2,
      left: {
        data: 3,
      },
    },
  }, [1, 3, 2]],
  [{
    data: 1,
    left: {
      data: 2,
      right: {
        data: 5,
      },
    },
    right: {
      data: 3,
      left: {
        data: 6,
      },
      right: {
        data: 7,
      },
    },
  }, [2, 5, 1, 6, 3, 7]],
]
export default testCase
