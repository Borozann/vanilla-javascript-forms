export class maskUtil {
  static phoneNumber(entity) {
    let v = entity.value.replace(/\D/g, "").substring(0, 11);
    if (v.length > 10)
      entity.value = `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7, 11)}`;
    else if (v.length > 6)
      entity.value = `(${v.substring(0, 2)}) ${v.substring(2, 6)}-${v.substring(6, 10)}`;
    else if (v.length > 2)
      entity.value = `(${v.substring(0, 2)}) ${v.substring(2)}`;
    else entity.value = v;
  }
}
