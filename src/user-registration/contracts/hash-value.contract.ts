export abstract class HashValue {
  abstract hash(value: string): Promise<string>
}
