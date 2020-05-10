exports.arrangeSearchTerm = function (term) {
  var search = {};
  if (term.grade && term.grade.length > 0) {
    search['condition'] = {
      $in: term.grade
    }
  }
  if (term.size && term.size.length > 0) {
    search['storageCapacity'] = {
      $in: term.size
    }
  }
  if (term.name && term.name.length > 0) {
    search['name'] = {
      $in: term.name
    };
  }
  if (term.price && term.price.min && term.price.min.length > 0) {
    search['price'] = {
      $gte: term.price.min
    }
  }
  if (term.price && term.price.max && term.price.max.length > 0) {
    search['price'] = {
      $lte: term.price.max,
      ...search['price']
    }
  }
  return search;
}
