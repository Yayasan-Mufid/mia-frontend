import React from 'react';
import {
  Container,
  Grid,
  Image,
  Text,
  Title,
  Anchor,
  Group,
  Button,
} from '@mantine/core';
import { Card } from '@mantine/core';

const UserContainer = () => {
  return (
    <Container size="xl">
      <Card withBorder radius="md" p="xl">
        <Image
          height={180}
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="Random unsplash image"
        />
        <Title fw={500} order={3} ta="center">
          Terima Kasih Sudah Berbelanja ,
          <Text span c="red" inherit>
            #BRND923TKO
          </Text>
        </Title>
        <Text ta="center">
          Pesanan kamu akan segera di proses pada tanggal 12-09-2022,
          <Anchor span c="grey" px={3} py={3}>
            Lihat barang
          </Anchor>
          yang kamu mau
        </Text>
        <hr />
        <Grid>
          <Grid.Col span={5}>
            <Text c="#ADB5BD">Nama</Text>
            <Text>Andrian</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text c="#ADB5BD">Nama Merchant</Text>
            <Text>Azarine</Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Text c="#ADB5BD">Tanggal Pemesanan</Text>
            <Text>17 Oktober 2022</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text c="#ADB5BD">Total Pembayaran</Text>
            <Text>Admin: 3.500</Text>
            <Text>Shipping: 35.000</Text>
            <Text>Total: 39.500</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text c="#ADB5BD">Handphone</Text>
            <Text>6287654639392</Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Text c="#ADB5BD">Status</Text>
            <Text c="green">Shipping</Text>
          </Grid.Col>
        </Grid>

        <Title fw={500} order={4} mt={20} mb={10}>
          Detail Alamat
        </Title>
        <Grid>
          <Grid.Col span={5}>
            <Text c="#ADB5BD">Alamat 1</Text>
            <Text>Jakarta selatan</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text c="#ADB5BD">Alamat 2</Text>
            <Text>Blok a2 No 4</Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Text c="#ADB5BD">Provinsi</Text>
            <Text>DKI Jakarta</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text c="#ADB5BD">Kode pos</Text>
            <Text>127382</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text c="#ADB5BD">Jenis pengiriman</Text>
            <Text>Go-send instant</Text>
          </Grid.Col>
        </Grid>
        <Group position="right" mt="md">
          <Button type="submit">Edit</Button>
        </Group>
      </Card>
    </Container>
  );
};

export default UserContainer;
