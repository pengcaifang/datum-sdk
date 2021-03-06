jest.setTimeout(30000);

const Datum = require('../../index');
const { setupDatums } = require('../utils');

let datum;

beforeAll(() => {
  [datum] = setupDatums();
});

describe('set data with owner', () => {
  const DATA = 'data';

  it.skip('sets data with a string address as owner', async () => {
    const OWNER = '0x85150aae8cdfe40f7125cba4413465ca7317c33a';
    // TODO: provide identity public/private key
    const hash = await datum.set(
      DATA,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      OWNER,
    );
    const item = await Datum.getItem(hash);
    expect(item.owner.toUpperCase()).toBe(OWNER.toUpperCase());
  });

  it.skip('throws an error if owner is not a valid address', async () => {
    const OWNER = 'owner';
    await expect(datum.set(
      DATA,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      OWNER,
    )).rejects.toThrow('Provided address "owner" is invalid, the capitalization checksum test failed, or its an indrect IBAN address which can\'t be converted.');
  });
});
